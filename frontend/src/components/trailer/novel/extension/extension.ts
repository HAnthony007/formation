import { cx } from 'class-variance-authority'
import { AIHighlight, Placeholder, TiptapImage, TiptapLink } from 'novel/extensions'
import { UploadImagesPlugin } from 'novel/plugins'

const aiHilight = AIHighlight

const placeholder = Placeholder

const tiptapLink = TiptapLink.configure({
    HTMLAttributes: {
        class: cx(
            "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
        )
    }
})

const tiptapImage = TiptapImage.extend({
    addProseMirrorPlugins() {
        return [
            UploadImagesPlugin({
                imageClass: cx("opacity-40 rounded-lg border border-stone-200")
            })
        ]
    },
})