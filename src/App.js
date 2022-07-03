import ShopItemClass from './components/ShopItemClass/ShopItemClass';
import ShopItemModel from './models/ShopItemModel';

function App() {
  const item = new ShopItemModel(
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399,
    '£');


  return (
    <ShopItemClass item = {item}/>
  );
}

export default App;
