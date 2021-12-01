import React, { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <form>
                <h3>Search</h3>

                <div className="form-group">
                    <label>Restaurants near You</label>
                    <input type="password" className="form-control" placeholder="Search for Restaurants" />
                    </div>


                <button type="submit" className="btn btn-primary btn-block">Search</button>
                
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
