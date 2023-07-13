import { Center, Container, Flex, Grid, SimpleGrid } from "@mantine/core";
import { MapItem } from "./MapItem";


export function Maps() {
  return (
    <Flex
      justify="center"
      gap="xl"
      align="center"
      p="4vw"
      w="100%"
    >
        <SimpleGrid cols={4}>
          <MapItem name="ancient" pool="active" tags={["tag1", "tag2"]} />
          <MapItem name="anubis" pool="active" />
          <MapItem name="inferno" pool="active" />
          <MapItem name="mirage" pool="active" />
          <MapItem name="nuke" pool="active" />
          <MapItem name="overpass" pool="active" />
          <MapItem name="vertigo" pool="active" />
          <MapItem name="cache" pool="reserve" />
          <MapItem name="dust2" pool="reserve" />
          <MapItem name="train" pool="reserve" />
        </SimpleGrid>
    </Flex>
  )
}