import { NextRequest, NextResponse } from 'next/server'

/**
 * Facebook Data Deletion Callback
 *
 * This endpoint handles data deletion requests from Facebook.
 * When a user removes your app from their Facebook settings, Facebook will call this endpoint.
 *
 * For this app, since all data is stored locally on the user's device,
 * there's nothing to delete server-side. We just confirm the request.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Facebook sends a signed_request parameter
    const { signed_request } = body

    if (!signed_request) {
      return NextResponse.json(
        { error: 'Missing signed_request parameter' },
        { status: 400 }
      )
    }

    // In a production app, you would:
    // 1. Verify the signed_request signature
    // 2. Parse the user_id from the signed_request
    // 3. Delete all user data from your database
    // 4. Return a confirmation URL and deletion confirmation code

    // For this app, since we store no data server-side, we just confirm
    const confirmationCode = `deletion_${Date.now()}_${Math.random().toString(36).substring(7)}`

    return NextResponse.json({
      url: 'https://bzhoff.com/privacy#data-deletion',
      confirmation_code: confirmationCode,
    })
  } catch (error) {
    console.error('Data deletion callback error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Also support GET for testing
export async function GET() {
  return NextResponse.json({
    message: 'Facebook Data Deletion Callback Endpoint',
    instructions: 'This endpoint accepts POST requests from Facebook when users delete the app.',
    status: 'active',
  })
}
