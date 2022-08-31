import { Trans } from "next-i18next"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

import { createPage } from "../../components/page"

export default createPage({
  title: "Bill",
  Page: () => {
    return (
      <div>
        <h1>Content Test Page</h1>

        <div>
          <Trans i18nKey="common:manifesto-intro">
            <p>
              As aspiring Software Craftsmen we are raising the bar of
              professional software development by practicing it and helping
              others learn the craft. Through this work we have come to value:
            </p>
            <ul>
              <li>Not only working software, but also well-crafted software</li>
              <li>
                Not only responding to change, but also steadily adding value
              </li>
              <li>
                Not only individuals and interactions, but also a community of
                professionals
              </li>
              <li>
                Not only customer collaboration, but also productive
                partnerships
              </li>
            </ul>
            <p>
              That is, in pursuit of the items on the left we have found the
              items on the right to be indispensable.
            </p>
          </Trans>
        </div>
      </div>
    )
  }
})

const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
