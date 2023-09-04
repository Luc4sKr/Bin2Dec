import './App.css';
import { Converter } from './components/converter/Converter';
import { Navbar } from './components/navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />

			<div>
				<Converter />
			</div>
		</>
	)
}

export default App;
