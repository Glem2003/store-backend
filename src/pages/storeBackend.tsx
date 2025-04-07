// components
import StoreBackendLayout from "../components/layout/storeBackend";
import Header from "../components/storeBackend/header/header";

const StoreBackend = () => {

    document.title = 'Store Backend';

    return (
        <StoreBackendLayout
            header={<Header />}
        />
    );
};

export default StoreBackend;
