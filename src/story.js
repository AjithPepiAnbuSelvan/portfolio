import './story.css';

export function buildStory() {
  document.querySelectorAll('.brand').forEach(el => el.innerHTML='Ajith<span>.</span>');
  document.querySelector('.studio-watermark').textContent='Native.';
  document.querySelector('#island-label').textContent='Ajith OS';
  new MutationObserver(()=>{const label=document.querySelector('#island-label');if(label.textContent==='ajithOS')label.textContent='Ajith OS'}).observe(document.querySelector('#island-label'),{childList:true});
  document.querySelector('.studio-label').textContent='Ajith Pepi Anbu Selvan · Native iOS Developer';
  document.querySelector('.studio-intro h1').innerHTML='The experience.<br/>The engineering.<br/><em>The details.</em>';
  document.querySelector('.studio-description').innerHTML='I’m Ajith. I work where native interfaces meet<br class="desktop"/> the SDKs, integrations, and state behind them.';
  document.querySelector('#open-device').innerHTML='Explore My iPhone <span>↗</span>';
  document.querySelector('#studio-intro').innerHTML='<span>▶</span> Hear My Introduction';
  document.querySelector('.callout-one').innerHTML='<span class="callout-dot"></span> Tap to explore my native world';
  document.querySelector('.callout-two').innerHTML='<span>01</span><div>Start with the experience.<br/><b>Then discover what powers it.</b></div>';
  const story=document.createElement('section');
  story.id='story';story.className='engineering-story';
  story.innerHTML=`<div class="story-title"><p class="eyebrow">Inside My Native World</p><h2>A tap is only<br/><em>the beginning.</em></h2><p>Follow the layers of an iOS experience.</p></div><div class="story-layout"><div class="story-chapters"><article class="story-chapter" data-chapter="0"><span class="chapter-count">01 / The Experience</span><h3>It starts with<br/>a human moment.</h3><p>A tap. A change of state. An interface that responds. I work with SwiftUI and UIKit to build native iOS experiences.</p><div class="chapter-tools"><span>SwiftUI</span><span>UIKit</span></div></article><article class="story-chapter" data-chapter="1"><span class="chapter-count">02 / The Connection</span><h3>Behind the moment,<br/>the moving parts.</h3><p>SDKs, REST APIs, notifications, and payments connect the interface to the capabilities it needs. My current role focuses on iOS SDK development.</p><div class="chapter-tools"><span>iOS SDK</span><span>REST</span><span>APNs</span></div></article><article class="story-chapter" data-chapter="2"><span class="chapter-count">03 / The Foundation</span><h3>Give every layer<br/>a clear responsibility.</h3><p>MVVM, concurrency, persistence, and tests help me think through the work beneath the screen. Explore the layers, then try the demos below.</p><div class="chapter-tools"><span>MVVM</span><span>Core Data</span><span>XCTest</span></div></article></div><div class="story-sticky"><div class="story-canvas" data-state="0"><div class="story-canvas-grid"></div><div class="story-canvas-label"><span class="story-live-dot"></span> <span id="story-state-label">The Native Interface</span><span class="story-step">01 / 03</span></div><div class="layer-scene"><div class="visual-layer visual-data"><div class="layer-label">Data & Persistence <span>03</span></div><div class="database-glyph"><i></i><i></i><i></i></div><span class="layer-caption">Core Data · REST</span></div><div class="visual-layer visual-sdk"><div class="layer-label">SDK & State <span>02</span></div><div class="sdk-glyph"><span>Input</span><b>SDK</b><span>Callback</span></div><span class="layer-caption">Integrations · Concurrency</span></div><div class="visual-layer visual-ui"><div class="mini-island"></div><div class="mini-status">9:41 <span>● ▰</span></div><span class="mini-overline">A Native Moment</span><h4>Made for<br/>the next tap.</h4><div class="mini-content"><span></span><span></span><span></span></div><button class="story-tap">Tap to Connect <span>↗</span></button><div class="mini-home"></div></div><div class="signal signal-one"></div><div class="signal signal-two"></div></div><div class="story-code"><span class="code-dot"></span><code id="story-code-text">Interface → Action → State</code></div><div class="story-controls" aria-label="Explore engineering layers"><button data-story-state="0" aria-pressed="true">Experience</button><button data-story-state="1" aria-pressed="false">Connection</button><button data-story-state="2" aria-pressed="false">Foundation</button></div></div><p class="story-visual-caption">Illustrative architecture · Scroll or choose a layer</p></div></div></section>`;
  document.querySelector('.hero').after(story);
  const canvas=story.querySelector('.story-canvas');
  const labels=['The Native Interface','The Integration Flow','The Architecture Beneath'];
  const codes=['Interface → Action → State','Request → SDK → Callback','View → ViewModel → Data'];
  let active=0;
  function setState(i){active=i;canvas.dataset.state=String(i);story.querySelector('#story-state-label').textContent=labels[i];story.querySelector('.story-step').textContent=`0${i+1} / 03`;story.querySelector('#story-code-text').textContent=codes[i];story.querySelectorAll('[data-story-state]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.storyState)===i)));story.querySelectorAll('.story-chapter').forEach((a,n)=>a.classList.toggle('chapter-active',n===i))}
  story.querySelectorAll('[data-story-state]').forEach(b=>b.onclick=()=>setState(Number(b.dataset.storyState)));
  story.querySelector('.story-tap').onclick=()=>setState((active+1)%3);
  const chapters=new IntersectionObserver(entries=>{const entry=entries.find(e=>e.isIntersecting);if(entry)setState(Number(entry.target.dataset.chapter))},{rootMargin:'-25% 0px -35% 0px',threshold:0});
  story.querySelectorAll('.story-chapter').forEach(a=>chapters.observe(a));
  setState(0);
  const navLink=document.createElement('a');navLink.href='#story';navLink.textContent='Inside iOS';document.querySelector('nav').prepend(navLink);
  const finePointer=matchMedia('(pointer:fine)').matches;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const device=document.querySelector('.device-shell');
  if(finePointer&&!reduced){document.querySelector('.device-scene').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();device.style.setProperty('--tilt-x',`${-(e.clientY-r.top-r.height/2)/70}deg`);device.style.setProperty('--tilt-y',`${(e.clientX-r.left-r.width/2)/65}deg`)});document.querySelector('.device-scene').addEventListener('pointerleave',()=>{device.style.setProperty('--tilt-x','0deg');device.style.setProperty('--tilt-y','0deg')})}
}
