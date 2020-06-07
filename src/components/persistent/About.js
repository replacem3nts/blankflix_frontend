import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const About = () => {
    return (
        <article id='about'>
            <section>
                <h2>About</h2>
                <ul id='about-toc'>
                    <li><Link to='/about#why'>Why [blank]FLIX was built</Link></li>
                    <li><Link to='/about#how-to'>How to Use [blank]FLIX</Link></li>
                    <li><Link to='/about#who'>Who Built [blank]FLIX</Link></li>
                </ul>
            </section>
            <section id='why'>
                <h2>Why</h2>
                <p>[blank]FLIX was created because there are a lot of free feature-length movies available on both YouTube and Vimeo, but there's no centralized streaming service to watch these videos on. Further, for whatever reason, the inbuilt search functions on these platforms are not very good at returning the movies you actually want to watch.</p>
                <p>With [blank]FLIX you can easily search for the films you're interested in, save them to your account and watch them at you leisure. Happy viewing!</p>
            </section>
            <section id='how-to'>
                <h2>How To</h2>
                <p>To get started click the sign up button and create an account. Once you've logged in, you can click the 'NEW' button and add vidoes to your personal video streaming service. When you </p>
            </section>
            <section id='who'>
            </section>
            
        </article>
    )
}
