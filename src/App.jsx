import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Center from "./Center";
import Flex from "./Flex";
import Galerie from "./Galerie";
import Img from "./Img";
import Title from "./Title";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <main className="h-full w-full p-4 bg-black">
      {!isLogged && (
        <Center>
          <div>
            <Card>
              <Flex dir="col" gap="md">
                <Img src="/images/bowser.webp" alt="bowser" />
                <Title>Hey pas si vite ! Vous n'êtes pas connecté...</Title>
                <Button onClick={() => setIsLogged(true)}>Se connecter</Button>
              </Flex>
            </Card>
          </div>
        </Center>
      )}
      {isLogged && (
        <Galerie>
          <Button onClick={() => setIsLogged(false)} type="square">
            Se déconnecter
          </Button>
        </Galerie>
      )}
    </main>
  );
}

export default App;
