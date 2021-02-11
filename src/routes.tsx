import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/Product'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products/:id" exact component={ProductPage} />
    </Switch>
  )
}
export default Routes