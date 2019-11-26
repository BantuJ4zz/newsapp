import axios from 'axios';

import * as c from './modules/home/constants';
import Articles from './modules/home/scenes/dashboard/Articles';

export async function getHeadlines(country = "us"){
    try{
        let requests = [];
        c.CATEGORIES.map((category) => {
            //let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2dd073b41fc9497c82ce9337acd17e4d"
            let url = `${c.HEADLINES}&country=${country}&category=${category.toLowerCase()}`;
            requests.push(axios.get(url))
        });

        let response = await Promise.all(requests);
        response.map((resp, idx) => {
            let {articles, totalResults} = resp.data;

            response[idx] = {articles, totalResults};
            //console.log(resp.data)
        });

        let [general, health, science, sports, technology] = response;
        //type:LOAD_ARTICLES
        return {general, health, science, sports, technology};

    }catch (e) {
        throw new Error(e);
    }
}

export async function getHeadlinesByCategory(category, page=1, country = "us"){
    try{
        const url = `${c.HEADLINES}&category=${category}&page=${page}&country=${country}`;
        let res = await axios.get(url);

        return res.data;
        //console.log(res.data)
    }catch (e) {
        throw new Error(e);
    }
}

export async function search(query, cancelToken){
    try{
        const url = `${c.SEARCH}&q=${query.toLowerCase()}`;
        let res = await axios.get(url, {
            cancelToken: cancelToken.token,
        });

        return res.data;
        //console.log(res.data)
    }catch (error) {
        let err = new Error(error.message);
        err.isCancel = (axios.isCancel(error));

        throw err;
    }
}
