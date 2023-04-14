import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HilbertVisualizer from '3DHilbertVisualizer'

function App() {
	const [count, setCount] = useState(0)
	const containerRef = useRef();

	useEffect(() => {
		const container = containerRef.current;

		const visualizer = new HilbertVisualizer({
			hilbertSize: 8,
		});

		visualizer.spawnHilbertMesh(0, 0, 0, 1, 0xff0000, {
			onclick: (e) => {
				setCount((count) => count + 1);
				alert('clicked');
			}
		});

		container.appendChild(visualizer.renderer.domElement);

		return () => {
			container.removeChild(visualizer.renderer.domElement);
			visualizer.destroy();
		}
	}, [containerRef])
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<div style={{
				aspectRatio: '16/9',
				width: '60vw',
				height: 'auto',
				border: '1px solid black',
				position: 'relative',
				zIndex: 10,
			}} ref={containerRef}></div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
