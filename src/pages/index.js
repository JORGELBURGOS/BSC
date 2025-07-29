import Dashboard from '@/components/Dashboard'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Scorecard 360°</title>
        <meta name="description" content="Dashboard Balanced Scorecard completo" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </Head>
      <Dashboard />
    </>
  )
}