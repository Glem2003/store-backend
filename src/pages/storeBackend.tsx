// hooks
import useSelectItem from "../hooks/useSelectItem";

// layout
import StoreBackendLayout from "../components/layout/storeBackend";
import Slide from "../components/storeBackend/slide/slide";
import Main from "../components/storeBackend/main/main";

// components
import Header from "../components/storeBackend/header/header";

const StoreBackend = () => {

    document.title = 'Store Backend';
    const { selectedItem, handleSelect, handleChange } = useSelectItem()

    return (
        <StoreBackendLayout
            header={<Header />}
            slide={<Slide selected={selectedItem} handleListBtn={handleSelect} onChange={handleChange} />}
            main={
                <Main>
                    {selectedItem}
                </Main>
            }
        />
    );
};

export default StoreBackend;
