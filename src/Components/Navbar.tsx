import { useState } from 'react';
import '../App.css'
import { createStyles, Navbar, Group, Image, Code, getStylesRef, rem, Text } from '@mantine/core';

import { 
TbMap,
TbBook,
TbBomb,
TbLogout,
} from "react-icons/tb"
import { Link, unstable_HistoryRouter, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkDisabled: {
    pointerEvents: 'none',
    color: '#555',
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Maps', icon: TbMap },
  { link: '/grenades', label: 'Grenades', icon: TbBomb },
  // { link: '/tactics', label: 'Tactics', icon: TbBook },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const map = queryParams.get('map');

  const links = data.map((item) => (
    <Link to={{pathname: item.link, search: `?map=${map}`}} className={cx(classes.link, { [classes.linkActive]: item.label === active },
      {[classes.linkDisabled]: map === null && item.label != 'Maps'}
    )} key={item.label}>
      <item.icon size="18" className={cx(classes.linkIcon, {[classes.linkDisabled]: map === null && item.label != 'Maps'})}/>
      <span>{item.label}</span>
    </Link>
  ));

  
  const createLink = (
  <Link to={{pathname: "/create", search: `?map=${map}`}} className={cx(classes.link, { [classes.linkActive]: "Create" === active },
  {[classes.linkDisabled]: location.pathname == "/"})} key={"Create"}>
    <span>{"Create"}</span>
   </Link>
  )

  return (
    <Navbar width={{ sm: 300 }} p="lg">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Group><TbBomb size="23"/> <Text fz="md" fw="500">Nadestorm</Text></Group>
          <Code sx={{ fontWeight: 700 }}>v1.0</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {createLink}
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <TbLogout size="20" className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}