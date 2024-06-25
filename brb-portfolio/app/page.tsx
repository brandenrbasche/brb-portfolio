import Header from "@/components/Header";
import {Container} from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
      <>
          <Header />
          <main>
              <div className='h-[300vh]'>
                  <Container>
                      <p>hero</p>
                      <Button size='large'>Large button</Button>
                  </Container>
              </div>
              <div>
                  <Container>
                      about me
                  </Container>
              </div>
              <div>
                  <Container>
                      tech stack
                  </Container>
              </div>
              <div>
                  <Container>
                      experience grid carousel
                  </Container>
              </div>
          </main>
      </>
  )
      ;
}
