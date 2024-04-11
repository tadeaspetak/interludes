import { Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { UserMenu } from "./UserMenu";

const links = [
  { link: "/about", label: "Rhymes" },
  { link: "/pricing", label: "Authors" },
  { link: "/learn", label: "About" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text
            inherit
            variant="gradient"
            gradient={{ from: "blue", to: "red" }}
          >
            interlud.es
          </Text>

          <Group ml={20} gap={5} visibleFrom="sm">
            {items}
          </Group>
        </Group>

        <UserMenu />
      </div>
    </header>
  );
}
