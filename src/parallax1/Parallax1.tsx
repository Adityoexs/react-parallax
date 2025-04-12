import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Parallax1.css';
import classNames from 'classnames';
import Layout from '../layout/Layout';

export default function Parallax1() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const card = 'card';
    const sticky = 'sticky';
    const parallax = 'parallax';
    const purple = 'purple';
    const blue = 'blue';
  
    const combinedCardSticky = classNames(card,sticky);
  
    return (
      <>
        <Parallax className={"background"}  pages={5}>
          <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
            <p className={"scrollText"} onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }}>Scroll down</p>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
            <div className={combinedCardSticky}>
              <p>I'm a sticky layer</p>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${card} ${parallax} ${purple}`}>
              <p>I'm not</p>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${card} ${parallax} ${blue}`}>
              <p>Neither am I</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </>
    )
}