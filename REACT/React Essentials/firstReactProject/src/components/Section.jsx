export default function Section({ title, children, ...props }) {
    return (
        <section {...props}> {/* yukardaki ...props buraya geçen diğer propsları tutar ve burdaki ...props hepsini yayar. Tagin içerisinden geçen attribute ları almak içi kullanılan bir yöntem. Burda, bu yötemle id geçtik */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}