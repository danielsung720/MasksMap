import axios from 'axios';

export default  {
    async reloadMasksDatas() {
        let { data: reponse } = await axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
        
        return reponse;
    }
};