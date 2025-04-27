export default function KeyFigures() {
    return (
      <section className="py-8 md:py-12 bg-green-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">137 702 670</div>
            <div className="text-gray-700">appareils collectés en 2023</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">54 046 188</div>
            <div className="text-gray-700">ampoules et tubes collectés</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">498 075</div>
            <div className="text-gray-700">tonnes de CO₂ évitées</div>
          </div>
        </div>
      </section>
    );
  }
  