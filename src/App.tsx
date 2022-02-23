import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Sitebar from './components/Navbar';
import APIURL from './helpers/environment';
import ReviewIndex from './components/Reviews/ReviewIndex';

export type appProps = {
  sessionToken: string | null
}

function App() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [sessionToken, setSessionToken] = useState<string | null>('');
  // const [role, setRole] = useState('member')
  const [title, setTitle] = useState("deadpool")
  const [year, setYear] = useState("")
  const [imdbID, setImdbId] = useState("")
  const [poster, setPoster] = useState("")
  const [genre, setGenre] = useState("")
  const [plot, setPlot] = useState("")
  const [searchMovies, setSearchMovies] = useState([])
  const [reviews, setReviews] = useState<any>([])
  const [revTitle, setRevTitle] = useState('')
  const [content, setContent] = useState('')
  const [otherSessionToken] = useState('')
  const [id] = useState('')
  const [] = useState('')
  const [] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
    console.log('HIT')
    thirdPartyFetch()
  }, [])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token'))
  }

  const thirdPartyFetch = () => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${title}&r=json`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
		
	}
})
.then(res => res.json() )
.then(data => {
  // const movieData = data.item;
  // console.log(data)
  setSearchMovies(data.Search);
  testMap();

  // movieData.map((item:any) => {
  //   console.log(item)
  //   const title = item.Title;
  //   const year = item.Year;
  //   const imdbID = item.imdbID;
  //   const poster = item.Poster;
  //   const genre = item.Genre;
  //   const plot = item.Plot;
  // })
})
.catch(err => {
	console.error(err);
});

  }

function testMap () {
  console.log(searchMovies)

  searchMovies.map((m:any) => {
    console.log(m.Title)
    return(
      <>

        <img src={m.Poster} alt={m.Title} />
      </>
    )
  })
 
  // let details = data;
  // details.map( (item :any) => {
  //   console.log(item)
  // })
}


  return (
    <div className="App">
      {protectedViews() ?
        <Fragment>
{/* <ReviewIndex  /> */}
<Sitebar clearToken={clearToken}
 username={username} reviews={reviews}
 setReviews={setReviews} sessionToken={sessionToken}
 revTitle={revTitle} content={content}
 setRevTitle={setRevTitle} setContent={setContent} id={id} />
        </Fragment>
        :
        <Fragment>
          <Signup email={email} setEmail={setEmail}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
            updateToken={updateToken}
          />
          {/* <Login
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
            updateToken={updateToken} sessionToken={sessionToken}
          /> */}
          
        </Fragment>
      }
      
      {/* {
        testMap()
      } */}
    </div>
  );
}

export default App;
