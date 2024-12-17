"use client";

import { useEffect, useState } from 'react';
import { YMaps, Map, GeolocationControl, Placemark, FullscreenControl, RouteButton, RouteEditor, RulerControl, SearchControl, TypeSelector, ZoomControl, Clusterer, Button } from '@pbe/react-yandex-maps';

export default function YandexMap() {
    const [currentLocation, setCurrentLocation] = useState<[number, number]>([55.751574, 37.573856]); // Varsayılan konum (Moskova)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation([latitude, longitude]);
                },
                (error) => {
                    console.error("Konum alınamadı:", error.message);
                }
            );
        } else {
            console.error("Tarayıcınız konum bilgisini desteklemiyor.");
        }
    }, []);


    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <YMaps query={{ lang: 'tr_TR' }}>
                <Map state={{ center: currentLocation, zoom: 16 }} style={{ width: '100%', height: '100%' }} modules={['geolocation', 'control.ZoomControl']}>
                    <Placemark geometry={currentLocation} properties={{ hintContent: 'Şu anki konumunuz', balloonContent: 'Burası sizin mevcut konumunuz!', }} />
                    <GeolocationControl options={{ float: 'right' }} />
                    <FullscreenControl />
                    <RouteButton options={{ float: "right" }} />
                    <RouteEditor />
                    <RulerControl options={{}} />
                    <SearchControl options={{ float: "right" }} />
                    <TypeSelector />
                    <ZoomControl />
                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                        }}
                    >

                        <Button
                            options={{ maxWidth: 128 }}
                            data={{ content: "Unpress me!" }}
                            defaultState={{ selected: true }}
                        />

                    </Clusterer>
                </Map>
            </YMaps>
        </div>
    );
}
