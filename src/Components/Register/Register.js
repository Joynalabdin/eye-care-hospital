import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <h2>Please Register</h2>
            <form>
                <label for="html">Email:</label>
                <input type="email" />
                <br />
                <label for="html">Password:</label>

                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;