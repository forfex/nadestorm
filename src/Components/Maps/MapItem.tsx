import { Badge, Button, Card, Group, Image, Paper, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows.xl,
      zIndex: 1000,
    },
    '&:active': {
      outline: '2px solid #333'
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function MapItem(props: any) {
  const { classes } = useStyles();
  
  const linkTo = {
    pathname: '/grenades',
    search: `?map=${props.name}`
  }

  let poolBadge;
  let tags;

  if (props.tags != null) {
    props.tags.forEach((element: string) => {
      <Badge color="white" variant="dark"> {element} </Badge>
    });
  }

  if (props.pool === "active") {
    poolBadge = <Badge color="green" variant="light"> Active </Badge>
  } else {
    poolBadge = <Badge color="yellow" variant="light"> Reserve </Badge>
  }

  return(
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
      <Card.Section>
        <Image
          src={'src/Components/Maps/images/'+ props.name + '.jpg'}
          height={160}
        alt={props.name}
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} tt="capitalize">{props.name}</Text>
        {poolBadge}
      </Group>
    </Card>
    </Link>
  )
}