import Layout from '../components/Layout'
import Fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h2>Bitcoin Currency</h2>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

    const data = await res.json()

    return {
        bpi: data.bpi
    }
}
export default Index