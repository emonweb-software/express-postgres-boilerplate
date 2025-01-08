import router from "@/configs/router-config"

router.get("/example", (req: TRequest, res: TResponse) => {
  res.send("Response from v1 example route")
})

export default router
