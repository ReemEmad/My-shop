import "./App.css"

import AppNav from "./components/AppNav"
import AppSlider from "./components/AppSlider"
import { Layout } from "antd"
import AppFilters from "./components/AppFilters"
import Products from "./Products"
import { ProductContext, ProductProvider } from "./Contexts/ProductContext"
import { CategoryProvider } from "./Contexts/CategoryContext"

function App() {
  const { Header, Footer, Sider, Content } = Layout
  return (
    <div className="App">
      <CategoryProvider>
        <ProductProvider>
          <Layout>
            <Header>
              <AppNav />
            </Header>
            <Layout>
              <Content>
                <AppSlider />
              </Content>
            </Layout>
            <Layout>
              <Sider>
                <AppFilters />
              </Sider>
              <Content>
                <Products />
              </Content>
            </Layout>
          </Layout>
        </ProductProvider>
      </CategoryProvider>
    </div>
  )
}

export default App
