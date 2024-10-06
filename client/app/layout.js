import "@/styles/globals.css";
import Nav from "@/components/nav";
import Provider from "@/components/provider";
import { children } from 'react';

export const metadata = {
    title: 'Mines Game',
    description: 'Risk the Mines, Reap the Rewards! 🎮'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body className="darker">
            <Provider>
    
            <div className='main'>
                <div className='gradient'/>
            </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>

            </Provider>
        </body>

    </html>
  )
}

export default Rootlayout