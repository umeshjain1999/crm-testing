import { bearStore } from "~/store"
import Button from "~/components/button"
import { Heading } from "~/components/heading"

export default function StyleTest() {
  const increasePopulation = bearStore((state) => state.increasePopulation)
  const bears = bearStore((state) => state.bears)
  return (
    <>
      <Heading>{bears} bears 🐻 around here...</Heading>
      <Button onClick={increasePopulation}>one up</Button>
    </>
  )
};