//use amplify mock evolutionfunction to test and add to event.json

exports.handler = async (event) => {
    console.log(event)
    const entryId = event.pathParameters.entryId;
    const entry = {'customerId': entryId, 'customerName': "Customer " + entryId };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(entry),
    };
    return response;
};