import React from 'react';
import postData from "../../utilities/postData";

const executeSqlQueryHoc = url =>
    WrappedComponent => (

        function executeSqlQueryHocContainer(props){

            //const executeSqlQuery = query => postData(url, query);

            //const executeSqlQuery = query => fetch(url);

            const executeSqlQuery = fetchUrl => fetch(fetchUrl);
            
            return (
                <WrappedComponent {...props} executeSqlQuery={executeSqlQuery}/>
            )
        }

    );

export default executeSqlQueryHoc;