exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Jacob',
      age: 85,
      email: 'jacobkosmart@gmail.com'
    })
  }
}