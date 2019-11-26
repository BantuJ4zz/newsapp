import * as c from './modules/home/constants';

let initialState = {
    //business: {articles:[]},
   // entertainment: {articles:[]},
    general: {articles:[]},
    sante: {articles:[]},
    science: {articles:[]},
    sports: {articles:[]},
    technologie: {articles:[]}
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.HEADLINES_AVAILABLE: {
           
            let { general, sante, science, sports, technologie} = action.headlines;
            //let { technology } = action.headlines;
            return {...state,general, health, science, sports, technology}
          
        }

        case c.CATEGORY_HEADLINES_AVAILABLE: {
            let { category, headlines, page } = action;
            const { articles } = headlines;

            if (page > 1){
                //clone the current state
                let data = state[category.toLowerCase()];
                let clone = JSON.parse(JSON.stringify(data));
                let articles_ = clone['articles'];

                clone['articles'] = [...articles_, ...articles];

                return {...state, [category.toLowerCase()]:clone};
            }else{
                return {...state, [category.toLowerCase()]:headlines};
            }
        }

        default:
            return state;
    }
};

export default newsReducer;