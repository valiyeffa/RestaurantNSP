const Menu = () => {
    return (
        <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
            {/* 1. Breakpoint-lər */}
            <section className="bg-white p-6 rounded-lg shadow ">
                <h2 className="text-2xl font-bold mb-4">1. Breakpoint-lər</h2>
                <div className="bg-blue-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-red-100 xl:bg-purple-100 p-4 rounded">
                    <p className="font-semibold ">Cari breakpoint:</p>
                    <span className="sm:hidden">📱 XS (0-425px)</span>
                    <span className="hidden sm:inline md:hidden">📱 SM (425px+)</span>
                    <span className="hidden md:inline lg:hidden">💻 MD (768px+)</span>
                    <span className="hidden lg:inline xl:hidden">💻 LG (1024px+)</span>
                    <span className="hidden xl:inline">🖥️ XL (1280px+)</span>
                </div>
                <div className="mt-4 text-sm">
                    <p><code>sm:</code> 425px+</p>
                    <p><code>md:</code> 768px+</p>
                    <p><code>lg:</code> 1024px+</p>
                    <p><code>xl:</code> 1280px+</p>
                    <p><code>2xl:</code> 1536px+</p>
                </div>
            </section>

            {/* 2. Layout Responsivlik */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">2. Layout Responsivlik</h2>

                {/* Grid responsive */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Grid Sistema:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="bg-blue-200 p-4 rounded">Element 1</div>
                        <div className="bg-blue-300 p-4 rounded">Element 2</div>
                        <div className="bg-blue-400 p-4 rounded">Element 3</div>
                        <div className="bg-blue-500 p-4 rounded text-white">Element 4</div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">
                        Mobil: 1 sütun, SM: 2 sütun, LG: 3 sütun, XL: 4 sütun
                    </p>
                </div>

                {/* Flexbox responsive */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Flexbox:</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 bg-green-200 p-4 rounded">Sol hissə</div>
                        <div className="flex-1 bg-green-300 p-4 rounded">Sağ hissə</div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">
                        Mobil: şaquli, Desktop: üfüqi
                    </p>
                </div>
            </section>

            {/* 3. Text və Spacing */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">3. Text və Spacing</h2>

                <div className="space-y-4">
                    {/* Responsive text sizes */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Text ölçüləri:</h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-yellow-100 p-3 rounded">
                            Bu mətn responsive ölçü dəyişir
                        </p>
                        <code className="text-xs bg-gray-100 p-1 rounded">text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl</code>
                    </div>

                    {/* Responsive padding/margin */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Padding/Margin:</h3>
                        <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-red-100 rounded">
                            <div className="bg-red-300 p-2 rounded">Responsive padding</div>
                        </div>
                        <code className="text-xs bg-gray-100 p-1 rounded">p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10</code>
                    </div>
                </div>
            </section>

            {/* 4. Hide/Show elementlər */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">4. Hide/Show Elementlər</h2>

                <div className="space-y-4">
                    <div className="block sm:hidden bg-blue-100 p-3 rounded">
                        📱 Yalnız mobil-də görünür
                    </div>
                    <div className="hidden sm:block md:hidden bg-green-100 p-3 rounded">
                        💻 Yalnız SM breakpoint-də görünür
                    </div>
                    <div className="hidden md:block bg-purple-100 p-3 rounded">
                        🖥️ MD və yuxarıda görünür
                    </div>
                </div>

                <div className="mt-4 text-sm space-y-1">
                    <p><code>hidden</code> - gizlət</p>
                    <p><code>block</code> - göstər</p>
                    <p><code>sm:hidden</code> - SM-dən başlayaraq gizlət</p>
                    <p><code>md:block</code> - MD-dən başlayaraq göstər</p>
                </div>
            </section>

            {/* 5. Responsive Max-Width */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">5. Responsive Max-Width</h2>

                <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-indigo-100 p-4 rounded">
                    <p className="text-center">
                        Bu konteyner responsive max-width istifadə edir
                    </p>
                    <p className="text-xs text-center mt-2 text-gray-600">
                        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                    </p>
                </div>
            </section>

            {/* 6. Menu nümunəsi */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">6. Responsive Menu Nümunəsi</h2>

                <nav className="bg-gray-800 text-white rounded-lg">
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center justify-between p-4">
                        <div className="text-xl font-bold">Logo</div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-blue-400">Ana səhifə</a>
                            <a href="#" className="hover:text-blue-400">Haqqımızda</a>
                            <a href="#" className="hover:text-blue-400">Xidmətlər</a>
                            <a href="#" className="hover:text-blue-400">Əlaqə</a>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-xl font-bold">Logo</div>
                            <button className="text-2xl">☰</button>
                        </div>
                        <div className="space-y-2">
                            <a href="#" className="block py-2 hover:bg-gray-700 rounded px-2">Ana səhifə</a>
                            <a href="#" className="block py-2 hover:bg-gray-700 rounded px-2">Haqqımızda</a>
                            <a href="#" className="block py-2 hover:bg-gray-700 rounded px-2">Xidmətlər</a>
                            <a href="#" className="block py-2 hover:bg-gray-700 rounded px-2">Əlaqə</a>
                        </div>
                    </div>
                </nav>
            </section>

            {/* 7. Responsive Card Layout */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">7. Responsive Card Layout</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                        <div key={num} className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Card {num}</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Bu responsive card-dır. Mobil-də 1 sütun, tablet-də 2 sütun, desktop-də 3 sütun göstərir.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Menu