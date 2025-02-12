import './App.css'
import {Capsule} from "./types/capsule-type.ts";

function App() {
    const capsule : Capsule[] = [
        {
            id : 1,
            title : 'gym',
            describtion : 'going to the gym',
            date  : new Date(2025 , 4 , 15),
            vibe : 'good'
        }
    ]
  return (
      <>
        <header>
          <h1>Time Capsule</h1>
        </header>
        <main>
          <div className='toolbar'>
            <input type="text"/>

            <select>
              <option selected value="all">all</option>
              <option value="work">work</option>
              <option value="frindly">frindly</option>
              <option value="family">family</option>
            </select>

            <button>..</button>

          </div>
            <div className="result">
                <ul>
                    {
                        capsule.map((r)=> (
                            <li>{r.title}</li>
                        ))
                    }
                </ul>
            </div>
        </main>
      </>
  )
}

export default App
