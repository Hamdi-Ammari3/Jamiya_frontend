import '../page.css';
import Cover from '../components/cover/page';
import Description from '../components/description/page';
import How from '../components/how/page';
import Differentiator from '../components/differentiator/page';
import Bnpl from '../components/bnpl/page';
import HowItWorks from '../components/howItWorks/page';
import Collateral from '../components/collateral/page';
import Fees from '../components/fees/page';
import Subscription from '../components/subscription/page';
import Contact from '../components/contact/page';

const Home = () => {
    return(
        <>
            <Cover/>
            <How/>
            <Description/>
            <Differentiator/>
            <Bnpl/>
            <HowItWorks/>
            <Collateral/>
            <Fees/>
            <Subscription/>
            <Contact/>
        </>
    )
}

export default Home;