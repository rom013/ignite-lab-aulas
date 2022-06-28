import { gql, useQuery } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

const GET_LESSONS_QUERY = gql`
	query{
		lessons{
			id
			title
		}
	}
` //gql é um recurso da lib graphql. "formata" o objeto dentro da const

function App() {
	return (
	
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ApolloProvider>
	)
}

export default App
