import React, {Component} from "react";

interface MoviePostProps{
    title: string,
    year: number,
    imdbID: string,
    poster: string,
    genre: string,
    plot: string,
    token: string

}

class MoviePost extends Component <MoviePostProps,{}> {
    constructor(props:MoviePostProps) {
        super(props)

    }

    handleSubmit =(e:any) => {
        e.preventDefault();

        fetch("http://localhost:3000/movies/favorites", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({movie:{
                title: this.props.title,
                year: this.props.year,
                imdbID: this.props.imdbID,
                poster: this.props.poster,
                genre: this.props.genre,
                plot: this.props.plot}
            }),
        
        })
    }

    render(): React.ReactNode{
        return(
            <div>

            </div>
        )
    }
}

export default MoviePost