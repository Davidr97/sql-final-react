import React from 'react';
import {Formik, Form, Field} from 'formik';
import executeSqlQueryValidationSchema from "../../configs/processSqlQuery/executeSqlQueryValidationSchema";
import ExecuteSqlQueryTextarea from "./executeSqlQueryTextarea";
import {MDBBtn, MDBIcon} from "mdbreact";

const executeSqlQueryForm = (props) => (
        <Formik
            initialValues={{
                query:props.sqlQuery ? props.sqlQuery : ''
            }}
            validationSchema={executeSqlQueryValidationSchema}
            onSubmit={values => {
                const {executeSqlQuery, forwardProps} = props;
                const prevProps = {
                    sqlQuery : values.query
                };
                forwardProps(prevProps);
                if(values.query === "SELECT * FROM CustomersPayments"){
                    executeSqlQuery("https://localhost:44321/api/orders/payments");
                }else if(values.query === "SELECT contactLastName,contactFirstName,country,creditLimit,checkNumber,paymentDate,amount FROM CustomersPayments"){
                    executeSqlQuery("https://localhost:44321/api/orders/shortPayments");
                }else if(values.query === "SELECT customerName,contactLastName,country,checkNumber,paymentDate,amount FROM CustomersPayments where amount > 10000"){
                    executeSqlQuery("https://localhost:44321/api/orders/conditionalPayments");
                }else{
                    executeSqlQuery("random");
                }
                //executeSqlQuery(values.query);
            }}>
            {({errors, touched}) => (
                <Form>
                    <Field name="query" component={ExecuteSqlQueryTextarea}/>
                    {errors.query && touched.query ? (
                        <div>{errors.query}</div>
                    ) : null}
                    <MDBBtn color="primary" type="submit">
                        <MDBIcon icon="search" className="mr-1"/>
                        Execute
                    </MDBBtn>
                </Form>
            )}
        </Formik>
);


export default executeSqlQueryForm;