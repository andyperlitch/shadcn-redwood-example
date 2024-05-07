import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import { Calendar } from 'src/components/ui/calendar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <div>
        <Button>This is a button</Button>
        <Calendar />
        <Badge title="foo">badge</Badge>
      </div>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
