import './App.css';
import Eshop from './eshop.png'

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <img src={Eshop} />
    <img src="huawei.jpg" />
  </div>
  {/* <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video> */}

<iframe width="853" height="480" src="https://www.youtube.com/embed/n-BXNXvTvV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
