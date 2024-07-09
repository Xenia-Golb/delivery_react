import Headling from '../../components/Headling/Headling';

function Error() {
    return (<>
        <Headling >Page not found</Headling>
        <img style={{ display: 'block', margin: '0 auto' }} src="/error.gif" alt="error" />
    </>);
}

export default Error;