import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <div className='error'>
                <div>
                    <h2>Ops! Path not found...</h2>
                    <br />
                    <div>
                        {
                            error && (
                                <div>
                                    <p className='status'>{error.statusText || error.message}</p>
                                    <h4>{error.status}</h4>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;