import * as React from 'react';


import Footer from './Footer/Footer';
import CardBox from './Card/CardBox';
import CardFancy from './CardFancy/CardFancy';
import Carousel from './Carousel/Carousel';
import InputForm from './SubmitForm/InputForm';

class App extends React.Component{
   public render(){
    return (
      <div className='App'>
        <Footer />
        <CardBox/>
        <CardFancy />
        <Carousel />
        <InputForm/>
      </div>
    )
  }
}

export default App;
