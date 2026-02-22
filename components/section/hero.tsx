import Image from 'next/image';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Welcome to My Academic Journey
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed text-pretty">
                Dedicated educator and researcher with expertise in cutting-edge
                academic fields. Passionate about inspiring the next generation
                of scholars and innovators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>

          {/* Right Side - Profile Stats */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">
                Years of Experience
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Students Mentored</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Published Papers</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Research Projects</p>
            </div>
          </div> */}

          <div>
            <Image
              src="/me.jpg"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
