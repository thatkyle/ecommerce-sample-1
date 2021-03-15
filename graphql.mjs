import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
 
const app = express();
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
 
app.listen(4000);

/* EXAMPLE WORKING REQUEST FROM BROWSER 
fetch('https://thatkyletest1.myshopify.com/api/2021-01/graphql.json', {
  method: 'POST',
  headers: {
    'X-Shopify-Storefront-Access-Token': '1918a6990120183f0e2e7f998ce456e8',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
  node(id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1ODE2MTc0NTkzOTM=") {
    id
    ... on Product {
      images(first: 1) {
        edges {
          node {
            originalSrc
          }
        }
      }
    }
  }
}`})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
*/