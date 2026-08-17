import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Faq() {
    const t = useTranslations("faq");
    return (
        <section className="text-center">
            <h1 className="text-3xl sm:text-6xl mt-8 font-JosefinSans text-blue-500">{t('title')}</h1>
            <div>
                <h2 className="question">{t('q1')}</h2>
                <p className="answer">
                    {t('a1')}
                </p>
                <h2 className="question">{t('q2')}</h2>
                <p className="answer">
                    {t('a2')}
                </p>
                <h2 className="question">{t('q3')}</h2>
                <p className="answer">
                    {t('a3-p1')}
                </p>
                <p className="answer">
                    {t.rich('a3-p2', {
                        "link-usda": (chunks) => <Link href="https://www.usda.gov/Linkbout-usda/news/blog/save-money-knowing-when-food-safe">{chunks}</Link>
                    })}
                </p>
                <p className="answer">
                    {t.rich('a3-p3', {
                        "link-guardian": (chunks) => <Link href="https://www.theguardian.com/environment/2023/may/13/food-labels-expiration-dates-safe-to-eat">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q4')}</h2>
                <p className="answer">
                    {t.rich('a4', {
                        "email": (chunks) => <Link href="mailto:seattlecommunityfridge@gmail.com">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q5')}</h2>
                <p className="answer">
                    {t.rich('a5', {
                        "link-wagives": (chunks) => <Link href="https://www.wagives.org/organization/Seattle-Community-Fridge">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q6')}</h2>
                <p className="answer">
                    {t.rich('a6', {
                        "link-volunteer": (chunks) => <Link href="/volunteer">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q7')}</h2>
                <p className="answer">
                    {t.rich('a7', {
                        "link-locations": (chunks) => <Link href="/locations">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q8')}</h2>
                <p className="answer">
                    {t.rich('a8', {
                        "link-ap": (chunks) => <Link href="https://apnews.com/article/food-waste-switzerland-germany-geneva-austria-refrigerators-environment-fc8484f267f1403a4b76db8b20541f9a">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q9')}</h2>
                <p className="answer">
                    {t.rich('a9-p1', {
                        "link-freedge": (chunks) => <Link href="https://drive.google.com/file/d/1O_44v7yoTkj3BIqw6SImhFrfygohMJgv/view">{chunks}</Link>,
                        "link-law": (chunks) => <Link href="https://app.leg.wa.gov/RCW/default.aspx?cite=69.80.031">{chunks}</Link>
                    })}
                </p>
                <p className="answer">
                    {t.rich('a9-p2', {
                        "link-selc": (chunks) => <Link href="https://www.theselc.org/mutual_aid_toolkit#h_6118206432711598469694450">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q10')}</h2>
                <p className="answer">
                    {t('a10')}
                </p>
                <h2 className="question">{t('q11')}</h2>
                <p className="answer">
                    {t('a11')}
                </p>
                <h2 className="question">{t('q12')}</h2>
                <p className="answer">
                    {t('a12-p1')}
                </p>
                <p className="answer">
                    {t.rich('a12-p2', {
                        "link-forbes": (chunks) => <Link href="https://www.forbes.com/sites/afdhelaziz/2021/05/05/the-rise-of-community-fridges-a-beautiful-idea-worth-spreading-so-we-can-practice-mutual-aid-with-each-other/">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q13')}</h2>
                <p className="answer">
                    {t('a13')}
                </p>
                <h2 className="question">{t('q14')}</h2>
                <p className="answer">
                    {t('a14')}
                </p>

                <h2 className="question">{t('q15')}</h2>
                <p className="answer">
                    {t('a15')}
                </p>
                <h2 className="question">{t('q16')}</h2>
                <p className="answer">
                    {t.rich('a16', {
                        "link-freedge": (chunks) => <Link href="https://freedge.org/">{chunks}</Link>
                    })}
                </p>
                <h2 className="question">{t('q17')}</h2>
                <p className="answer">
                    {t('a17-p1')}
                </p>
                <p className="answer">
                    {t('a17-p2')}
                </p>
                <h1 className="text-3xl sm:text-4xl">{t('community-understanding')}</h1>
                <p className="answer">
                    {t('cu1')}
                </p>
                <ul>
                    <li>
                        <p className="answer">
                            {t('cu2')}
                        </p>
                    </li>
                    <li>
                        <p className="answer">
                            {t('cu3')}
                        </p>
                    </li>
                    <li>
                        <p className="answer">
                            {t('cu4')}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}