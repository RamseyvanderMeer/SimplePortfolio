import cloudinary from "cloudinary"

export default async function handler(req, res) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  })

  const { resources } = await cloudinary.v2.search
    .expression("folder:ramseyvdm")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()

  for (let i = 0; i < resources.length; i++) {
    for (let prop in resources[i]) {
      if (prop !== "url" && prop !== "width" && prop !== "height") {
        delete resources[i][prop]
      } else if (prop === "url") {
        resources[i].src = resources[i][prop]
        delete resources[i][prop]
      }
    }
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(resources))
}
