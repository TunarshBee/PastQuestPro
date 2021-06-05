import React from 'react'
import '../../css/form/Project.css'

function Project() {
    return (
        <div>
            <form action=''>
                <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <div className='schools'>
                    <select>
                        <option>School</option>
                    </select>
                    <div>
                        <p>
                            <label htmlFor="others1" className='others1'>others</label>
                        <input type='text' className='inputs' placeholder='Not available? please specify' />
                        </p>
                    </div>
                </div>
                <div className='department'>
                    <select>
                        <option>Department</option>
                    </select>
                    <div>
                        <p>
                            <label htmlFor="others2">others</label>
                        <input type='text' className='inputs' placeholder='Not available? please specify' />
                        </p>
                    </div>
                </div>
                <div className='course'>
                    <select>
                        <option>Course</option>
                    </select>
                    <div>
                        <p>
                            <label htmlFor="others3">others</label>
                        <input type='text' className='inputs' placeholder='Not available? please specify' />
                        </p>
                    </div>
                </div>
                <div className='topics'>
                    <select>
                        <option>Project Topic</option>
                    </select>
                    <div>
                        <p>
                            <label htmlFor="others4">others</label>
                        <input type='text' className='inputs' placeholder='Not available? please specify' />
                        </p>
                    </div>
                </div>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Project
