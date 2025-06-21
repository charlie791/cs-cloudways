import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query TestProducts {
            products(first: 3) {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          }
        `
      })
    })

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      data,
      headers: Object.fromEntries(response.headers.entries())
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}