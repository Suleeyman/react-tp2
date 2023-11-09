import Card from "./Card";
import Center from "./Center";
import Flex from "./Flex";
import Grid from "./Grid";
import Img from "./Img";
import Paragraph from "./Paragraph";
import Title from "./Title";

const IMGS = [
  {
    name: "Mario Bros",
    description: "Un petit plombier moustachu",
    imageUrl: "/images/mario.webp",
  },
  {
    name: "V",
    description: "La cybernétique au service de l'humain",
    imageUrl: "/images/v.webp",
  },
  {
    name: "Pikachu",
    description: "Est-ce vraiment nécessaire de vous le présenter ?",
    imageUrl: "/images/pikachu.png",
  },
  {
    name: "Master Chief",
    description: "La peur incarnée des covenants",
    imageUrl: "/images/halo.jpeg",
  },
  {
    name: "Ethan Winters",
    description: "L'homme malchanceux de Resident Evil",
    imageUrl: "/images/ethan.jpeg",
  },
  {
    name: "Solid Snake",
    description: "L'agent secret contre Metal Gear",
    imageUrl: "/images/solidSnake.webp",
  },
  {
    name: "Kratos",
    description: "Le papa contre les dieux qui voulait protéger son fils",
    imageUrl: "/images/kratos.png",
  },
  {
    name: "Aloy",
    description: "L'héroine à l'arc contre les mécas",
    imageUrl: "/images/aloy.webp",
  },
];
function Galerie({ children }) {
  return (
    <div className="flex flex-col gap-2 gap-y-10 items-end justify-item-center">
      {children}
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
        <Grid row="1-to-1" col="1-to-1">
          <Card>
            <Flex dir="col" align="left">
              <Img
                src="/images/mario.webp"
                alt="mario"
                type="rounded"
                size="sm"
              />
              <Title>Mario bros</Title>
              <Paragraph>Un petit plombier moustachu</Paragraph>
            </Flex>
          </Card>
        </Grid>
        <Grid row="1-to-1" col="2-to-2">
          <Card>
            <Flex dir="col" align="left">
              <Img src="/images/v.webp" alt="v" type="rounded" size="sm" />
              <Title>V</Title>
              <Paragraph>La cybernétique au service de l'humain</Paragraph>
            </Flex>
          </Card>
        </Grid>
        <Grid row="1-to-2" col="2-to-4">
          <Card>
            <Center>
              <Flex dir="col" align="left">
                <Img
                  src="/images/pikachu.png"
                  alt="pikachu"
                  type="square"
                  size="md"
                />
                <Title>Pikachu</Title>
                <Paragraph>
                  Est-ce vraiment nécessaire de vous le présenter ?
                </Paragraph>
              </Flex>
            </Center>
          </Card>
        </Grid>
        <Grid row="2-to-2" col="1-to-2">
          <Card>
            <Flex>
              <Flex dir="col" align="left">
                <Title>Master Chief</Title>
                <Paragraph>La peur incarnée des covenants </Paragraph>
              </Flex>

              <Img src="/images/halo.jpeg" alt="halo" type="square" size="md" />
            </Flex>
          </Card>
        </Grid>
        <Grid row="3-to-3" col="1-to-1">
          <Card>
            <Flex dir="col" align="left">
              <Title>Ethan Winters</Title>
              <Paragraph>L'homme malchanceux de Resident Evilt </Paragraph>
              <Img
                src="/images/ethan.jpeg"
                alt="ethan"
                type="square"
                size="md"
              />
            </Flex>
          </Card>
        </Grid>
        <Grid row="3-to-3" col="2-to-2">
          <Card>
            <Flex dir="col" align="left">
              <Title>Solid Snake</Title>
              <Paragraph>L'agent secret contre Metal Gear</Paragraph>
              <Img
                src="/images/solidSnake.webp"
                alt="solidSnake"
                type="square"
                size="md"
              />
            </Flex>
          </Card>
        </Grid>
        <Grid row="3-to-3" col="3-to-3">
          <Card>
            <Flex dir="col" align="left">
              <Title>Aloy</Title>
              <Paragraph>
                Le papa contre les caca qui voulait son fils
              </Paragraph>
              <Img src="/images/aloy.webp" alt="aloy" type="square" size="md" />
            </Flex>
          </Card>
        </Grid>
        <Grid row="3-to-3" col="4-to-4">
          <Card>
            <Flex dir="col" align="left">
              <Title>Kratos</Title>
              <Paragraph>L'héroine à l'arc contre les mécas </Paragraph>
              <Img
                src="/images/kratos.png"
                alt="kratos"
                type="square"
                size="md"
              />
            </Flex>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default Galerie;
